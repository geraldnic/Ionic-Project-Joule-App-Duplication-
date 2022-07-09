import { IonButtons, IonContent, IonHeader, IonItem, IonIcon, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar, IonCard, IonGrid, IonRow, IonCol, IonItemDivider, IonFab, IonFabButton, IonButton } from '@ionic/react';
import './Home.css';
import {searchSharp} from 'ionicons/icons';
import {Category} from '../components/Category';
import { Guides } from '../components/Guides';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonItem lines='none' slot="end" className='searchButton' button routerLink={"/search"} routerDirection="none">
            <p className='searchButtonText'>Search</p>
            <IonIcon icon={searchSharp}></IonIcon>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='homeContent'>
        <IonCard className='mainCard'>
          <img className='mainImage' src='https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg'></img>
          <div className='mainCaption'>
            <h2>Get your Joule. Be happy.</h2>
          </div>
        </IonCard>
        <p className='divider'>Search by Type</p>
        <Category />
        <p className='divider'>Cooking Guides</p>
        <Guides />
        <div className='bottomSpace'></div>
        <IonButton shape='round' className='sjButton'>Search for Joule</IonButton>
        <IonFab>
          <IonFabButton className='qrButton' size='small'>
            <img className='qrIcon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/QR_icon.svg/1024px-QR_icon.svg.png'></img>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;

