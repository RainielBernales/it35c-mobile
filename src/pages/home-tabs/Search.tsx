import { IonContent, IonHeader, IonItem, IonMenu, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, IonIcon, IonMenuToggle, IonButton, IonMenuButton, IonButtons } from '@ionic/react';

const Search: React.FC =()=>{

  return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>
                        Search
                    </IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>

        </IonContent>
    </IonPage>

  );
};

export default Search;