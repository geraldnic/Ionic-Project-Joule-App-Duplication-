import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonMenuToggle,
    IonItem,
    IonLabel,
    IonIcon,
  } from "@ionic/react";
  import React from "react";
  import {homeOutline, bulbOutline, helpCircleOutline, hammerOutline} from 'ionicons/icons';
  import './Menu.css';
  import lobster from '../assets/lobster.png';

  export const Menu = () => {
    return (
      <IonMenu side="start" contentId="main">
        <IonContent className="backgroundMenuImage">
          <IonList className="backgroundMenu">
            <IonMenuToggle auto-hide="false">
              <IonItem lines="none" className="menuItem homeItem" button routerLink={"/home"} routerDirection="none">
                <IonIcon slot="start" icon={homeOutline}></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem lines="none" className="menuItem" button routerLink={"/tipsntrick"} routerDirection="none">
                <IonIcon slot="start" icon={bulbOutline}></IonIcon>
                <IonLabel>{`Tips & Tricks`}</IonLabel>
              </IonItem>
              <IonItem lines="none" className="menuItem" button routerLink={"/help"} routerDirection="none">
                <IonIcon slot="start" icon={helpCircleOutline}></IonIcon>
                <IonLabel>{`Help & Support`}</IonLabel>
              </IonItem>
              <IonItem lines="none" className="menuItem" button routerLink={"/settings"} routerDirection="none">
                <IonIcon slot="start" icon={hammerOutline}></IonIcon>
                <IonLabel>Settings</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
          <img className="menuImage" src={lobster}></img>
        </IonContent>
      </IonMenu>
    );
  };