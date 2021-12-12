import { Dialog,DialogActions ,DialogContent ,DialogTitle ,useMediaQuery ,}from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

const TermsModal = ({ open, setOpen }) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    <b>القوانين و الشروط</b>
                </DialogTitle>
                <DialogContent>
                    <ol className="term-list">
                        <li>الالتزام بالإجراءات الوقائية من فيروس كورونا حسب الخطة الموضوعة اللجنة العليا .</li>
                        <li>إلزام الموظفين والزوار بارتداء الكمامات داخل الجناح او المحل.</li>
                        <li>توفير المعقمات الطبية داخل المحل .</li>
                        <li>التقيد بإجراءات التباعد الإجتماعي مسافة واحد متر على الأقل.</li>
                        <li>التقيد بعدم الإزدحام وذلك بتحديد العدد الكافي للتباعد الإجتماعي.</li>
                        <li> الإلتزام بالتخفيضات المتفق عليها .</li>
                    </ol>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} sx={{ background: '#d7d9de' }}>
                        إغلاق
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default TermsModal;