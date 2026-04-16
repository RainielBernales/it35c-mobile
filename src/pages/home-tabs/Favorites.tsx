import { IonContent, IonHeader, IonItem, IonMenu, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, IonIcon, IonMenuToggle, IonButton, IonMenuButton, IonButtons } from '@ionic/react';

const Favorites: React.FC =()=>{

  return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>
                        Favorites
                    </IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>

        </IonContent>
    </IonPage>

  );
};

export default Favorites;