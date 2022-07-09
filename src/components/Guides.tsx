import { IonCard, IonCol, IonGrid, IonRow } from "@ionic/react";
import './Guides.css';

export const Guides = () => {
    return (
        <>
        <IonCard className='guidesCard'>
            <IonGrid className="imageCol">
                <IonRow>
                    <IonCol size="6" className="imageCol">
                        <img className='guidesImage' src='https://st3.depositphotos.com/1000504/19178/i/600/depositphotos_191783046-stock-photo-fresh-tasty-burger.jpg'></img>
                    </IonCol>
                    <IonCol>
                        <p className='guidesCaption'>Get Started: Basic Guides</p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>

        <IonCard className='guidesCard'>
            <IonGrid className="imageCol">
                <IonRow>
                    <IonCol size="6" className="imageCol">
                        <img className='guidesImage' src='https://assets.epicurious.com/photos/57d0468623c691f13ac8c1f5/master/pass/grilled-fish.jpg'></img>
                    </IonCol>
                    <IonCol>
                        <p className='guidesCaption'>{`Quick & Easy`}</p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>

        <IonCard className='guidesCard'>
            <IonGrid className="imageCol">
                <IonRow>
                    <IonCol size="6" className="imageCol">
                        <img className='guidesImage' src='https://hurrythefoodup.com/wp-content/uploads/2015/09/overnight-oats-peaches-post.jpg'></img>
                    </IonCol>
                    <IonCol>
                        <p className='guidesCaption'>Cook in a Jar- <br></br> No Bag Required!</p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>

        <IonCard className='guidesCard'>
            <IonGrid className="imageCol">
                <IonRow>
                    <IonCol size="6" className="imageCol">
                        <img className='guidesImage' src='https://p4.wallpaperbetter.com/wallpaper/959/297/208/greens-pepper-steak-meat-wallpaper-preview.jpg'></img>
                    </IonCol>
                    <IonCol>
                        <p className='guidesCaption'>All the Guides</p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>

        <IonCard className='guidesCard'>
            <IonGrid className="imageCol">
                <IonRow>
                    <IonCol size="6" className="imageCol">
                        <img className='guidesImage' src='https://qph.fs.quoracdn.net/main-qimg-cea0da217634233c441c4942baf65222-lq'></img>
                    </IonCol>
                    <IonCol>
                        <p className='guidesCaption'>Joule Ready (Available in the US)</p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonCard>
        </>
    );
};
