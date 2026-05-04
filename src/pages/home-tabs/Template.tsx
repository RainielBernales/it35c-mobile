import { IonContent, IonHeader, IonItem, IonMenu, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, IonIcon, IonMenuToggle, IonButton, IonMenuButton, IonButtons } from '@ionic/react';

const Template: React.FC =()=>{

  return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>
                        Template
                    </IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>

        </IonContent>
    </IonPage>

  );
};

export default Template;