import './ExploreContainer.css';
import { useState } from 'react';
import { IonButton, IonAlert } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [showAlert, setShowAlert] = useState(false);

  const alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        setShowAlert(false);
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        setShowAlert(false);
      },
    },
  ];

  return (
    <div>
      <IonButton id="present-alert" onClick={() => setShowAlert(true)}>
        Click Me
      </IonButton>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={alertButtons}
      />
    </div>
  );
};

export default ExploreContainer;
