import ConfirmForm from '../main/confirmForm';
import SwiperGalery from '../main/addGalery';


export function changeModalContent(contentType, registration) {
    if (contentType === 'confirmForm') {
        if (registration) return new ConfirmForm('registration');
        else return new ConfirmForm('signIn');
    } else if (contentType === 'swiperGalery')
        return new SwiperGalery();
    else return;
}
