import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonMenuButton, IonButtons, IonLabel, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol} from '@ionic/react';
import { thumbsUpOutline, chatboxEllipsesOutline, shareOutline } from 'ionicons/icons';

const Feed: React.FC =()=>{

    const games = [
        { name: 'Pokemon XYZ' },
        { name: 'Tetris 2' },
        { name: 'The Legend of Zelda' },
        { name: 'Pac-Man' },
        { name: 'Mortal Kombat' },
        { name: 'Final Fantasy' },
        { name: 'Pokemon White' },
        { name: 'GTA IV' },
        { name: 'Left 4 Dead' },
        { name: 'Super Mario Bros 3' },
        { name: 'Dr. Mario' },
        { name: 'Barbarians Palace' },
        { name: 'Ben 10' },
        { name: 'Train 3' }
    ]
  return(

    
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>
                        Feed
                    </IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>
                <IonList>
                    {games.map(( item, index) => (
                        <IonCard key={index}>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <IonCardHeader>
                                <IonCardTitle>{item.name}</IonCardTitle>
                                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <IonButton fill="clear" expand ='full'>
                                            <IonIcon icon={thumbsUpOutline}></IonIcon>
                                            <IonLabel style={{ marginLeft: '5px' }}>Like</IonLabel>
                                        </IonButton>
                                    </IonCol>
                                    <IonCol>
                                        <IonButton fill="clear" expand ='full'>
                                            <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                                            <IonLabel style={{ marginLeft: '5px' }}>Comment</IonLabel>
                                        </IonButton>
                                    </IonCol>
                                    <IonCol>
                                        <IonButton fill="clear" expand ='full'>
                                            <IonIcon icon={shareOutline}></IonIcon>
                                            <IonLabel style={{ marginLeft: '5px' }}>Share</IonLabel>
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCard>
                    ))}
                </IonList>
        </IonContent>
    </IonPage>

  );
};

export default Feed;