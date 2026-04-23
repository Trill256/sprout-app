import React, { useState } from 'react';
import Header from './components/Header';
import PlantTabs from './components/PlantTabs';
import HumidityBar from './components/HumidityBar';
import PlantFace from './components/PlantFace';
import Sidebar from './components/Sidebar';
import AddPlantModal from './components/AddPlantModal';
import { useHumidity } from './hooks/useHumidity';
import { createPlant } from './firebase';

// Componente interno para manejar el hook por planta activa
const PlantView = ({ activePlant }) => {
  const { humidity, happyRange } = useHumidity(activePlant?.name ?? null);

  return (
    <>
      <HumidityBar value={humidity} happyRange={happyRange} />
      <PlantFace plantName={activePlant?.name ?? null} humidity={humidity} happyRange={happyRange} />
    </>
  );
};

const App = () => {
  const [plants, setPlants] = useState([]);
  const [activePlant, setActivePlant] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddPlant = async ({ name, type }) => {
    await createPlant(name, type);
    const newPlant = { name, type };
    setPlants((prev) => [...prev, newPlant]);
    setActivePlant(newPlant);
  };

  const handleDeletePlant = (plant) => {
    const updated = plants.filter((p) => p.name !== plant.name);
    setPlants(updated);
    if (activePlant?.name === plant.name) {
      setActivePlant(updated.length > 0 ? updated[0] : null);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] p-4 md:p-8 font-sans text-gray-700">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        <div className="flex-1 p-8">
          <Header />
          <PlantTabs
            plants={plants}
            activeTab={activePlant}
            onSelect={setActivePlant}
            onDelete={handleDeletePlant}
          />
          <PlantView activePlant={activePlant} />
        </div>
        <Sidebar onAddPlant={() => setShowModal(true)} />
      </div>

      {showModal && (
        <AddPlantModal
          onAdd={handleAddPlant}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default App;