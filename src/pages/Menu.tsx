import { IonHeader, IonPage, IonTitle, IonToolbar }from'@ionic/react';

const Menu: React.FC =()=>{
  return(
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
    </IonPage>
  );
};
export default Menu;
