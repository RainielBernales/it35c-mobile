import { IonHeader, IonPage, IonTitle, IonToolbar }from'@ionic/react';

const Page1: React.FC =()=>{
  return(
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Page 1</IonTitle>
          </IonToolbar>
        </IonHeader>
    </IonPage>
  );
};
export default Page1;

