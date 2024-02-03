import { linkUnlink } from '../../assets';
import './ErrorPage.scss';

function ErrorPage() {

    return <div className='error-page-container'>
              <img src={ linkUnlink } alt='film-gif' width={'200px'} />
              <span>Something just went wrong...! Please refresh the browser</span>
          </div>
}

export default ErrorPage;
