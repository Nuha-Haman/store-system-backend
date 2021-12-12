import { filterStores } from "api/store"
import { refreshAccessToken } from "api/user"
import { useEffect, useState } from "react"
import cookie from "js-cookie";
import Filter from "./Filter"
import Pannel from "./Pannel"
import StoreCount from "./StoreCount"
import StoreList from "./StoreList"
import PaginationButton from "./PaginationButton";

const Stores = () => {

    const [filterTerm , setFilterTerm] = useState('')
    const [storeData, setStoreData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                let { data } = await filterStores(filterTerm, 0, 10);
                setStoreData(data);
            } catch (error) {
                if (error?.response?.status === 401); {
                    const newToken = await refreshAccessToken();
                    cookie.set('accessToken', newToken.data.access_token,);
                }
            }
        }
        fetchData();
    }, [filterTerm,setStoreData]);

    return (
        <>
            <Pannel />
            <StoreCount totalStores={storeData?.total_markets} />
            <Filter filterTerm={filterTerm} setFilterTerm={setFilterTerm} />
            <StoreList stores={storeData?.markets} />
            <PaginationButton total={storeData?.total_pages} setStoreData={setStoreData} filterTerm={filterTerm} />
        </>
    )
}

export default Stores