import ConfirmFormModal from '../main/modals/ConfirmFormModal';
import GalleryRoomsModal from '../main/modals/GalleryRoomsModal';


export function changeModalContent(contentType, registration) {
    if (contentType === 'confirmForm') {
        if (registration) return new ConfirmFormModal('registration');
        else return new ConfirmFormModal('signIn');
    } else if (contentType === 'swiperGalery')
        return new GalleryRoomsModal();
    else return;
}