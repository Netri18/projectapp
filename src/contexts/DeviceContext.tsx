import { createContext, useContext, useState, ReactNode } from "react";

export interface Device {
  id: number;
  name: string;
  deviceId: string;
  location: string;
  sensorType: string;
  status: string;
}

interface DeviceContextType {
  devices: Device[];
  addDevice: (device: Omit<Device, "id" | "status">) => void;
  deleteDevice: (id: number) => void;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const DeviceProvider = ({ children }: { children: ReactNode }) => {
  const [devices, setDevices] = useState<Device[]>([
    { id: 1, name: "Node 1", deviceId: "N001", location: "Field A", sensorType: "moisture", status: "Online" },
    { id: 2, name: "Node 2", deviceId: "N002", location: "Field B", sensorType: "temperature", status: "Online" },
  ]);

  const addDevice = (device: Omit<Device, "id" | "status">) => {
    setDevices((prev) => [
      ...prev,
      { ...device, id: prev.length + 1, status: "Online" },
    ]);
  };

  const deleteDevice = (id: number) => {
    setDevices((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <DeviceContext.Provider value={{ devices, addDevice, deleteDevice }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevices = () => {
  const context = useContext(DeviceContext);
  if (!context) throw new Error("useDevices must be used within DeviceProvider");
  return context;
};
