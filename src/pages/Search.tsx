import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter, IonItem, IonLabel, IonSegmentButton, IonSegment, IonIcon } from '@ionic/react';
import {searchOutline} from 'ionicons/icons';
import { call, camera, bookmark, heart, pin } from 'ionicons/icons';
import './Search.css';
import SearchCard from '../components/SearchCard';

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSearchbar className='searchBar' value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showClearButton="never" showCancelButton='focus'></IonSearchbar>
          <IonItem lines='none' slot="end" className='cancelButton' button routerLink={"/home"} routerDirection="none" onClick={e => setSearchText("")}>
            <p className='cancelButtonText'>Cancel</p>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent className='SearchContent'>
          <IonSegment className='searchPref'>
            <IonSegmentButton className='prefButton'>
              <IonLabel className='searchPrefLabel'>All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton className='prefButton'>
              <IonLabel className='searchPrefLabel'>Joule App</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton className='prefButton'>
              <IonLabel className='searchPrefLabel'>ChefSteps.com</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        <SearchCard />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
export default Search;