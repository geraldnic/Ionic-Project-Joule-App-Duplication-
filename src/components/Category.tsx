import { IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import React from "react";
import './Category.css';

// import images
import Beef from '../assets/beef.png';
import Seafood from '../assets/seafood.png';
import Poultry from '../assets/poultry.png';
import Pork from '../assets/pork.png';
import Lamb from '../assets/lamb.png';
import Deer from '../assets/deer.png';
import Vegetable from '../assets/vegetable.png';
import Dessert from '../assets/dessert.png';
import Egg from '../assets/egg.png';

export const Category = () => {
    return (
        <IonGrid>
          <IonRow>
            <IonCol size='4'>
              <IonCard className='categoryCard'>
                <img className='categoryImage' src={Beef}></img>
                <p className='categoryCaption'>Beef</p>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard className='categoryCard'>
                <img className='categoryImage' src={Seafood}></img>
                <p className='categoryCaption'>Seafood</p>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard className='categoryCard'>
                <img className='categoryImage' src={Poultry}></img>
                <p className='categoryCaption'>Poultry</p>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard className='categoryCard'>
                <img className='categoryImage' src={Pork}></img>
                <p className='categoryCaption'>Pork</p>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard className='categoryCard'>
                <img className='categoryImage' src={Lamb}></img>
                <p className='categoryCaption'>Lamb</p>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard className='categoryCard'>
                <img className='categoryImage' src={Deer}></img>
                <p className='categoryCaption'>Game</p>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard className='categoryCard'>
                <img className='categoryImage' src={Vegetable}></img>
                <p className='categoryCaption'>Vegetables</p>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard className='categoryCard'>
                <img className='categoryImage' src={Dessert}></img>
                <p className='categoryCaption'>Dessert</p>
              </IonCard>
            </IonCol>
            <IonCol size='4'>
              <IonCard className='categoryCard'>
                <img className='categoryImage' src={Egg}></img>
                <p className='categoryCaption'>Other</p>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
    );
};