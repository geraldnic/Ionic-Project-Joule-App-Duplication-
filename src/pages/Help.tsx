import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import {searchOutline} from 'ionicons/icons';

const Help: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{`Help & Support`}</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonItem lines='none' slot="end" className='searchButton' button routerLink={"/search"} routerDirection="none">
            <IonLabel className='searchButtonText'>Search</IonLabel>
            <IonIcon icon={searchOutline}></IonIcon>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default Help;