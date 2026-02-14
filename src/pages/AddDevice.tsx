import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sprout, Hash, MapPin, ChevronDown } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { useDevices } from "@/contexts/DeviceContext";

const AddDevice = () => {
  const navigate = useNavigate();
  const { addDevice } = useDevices();
  const [name, setName] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [location, setLocation] = useState("");
  const [sensorType, setSensorType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDevice({ name: name || "New Node", deviceId, location, sensorType });
    navigate("/nodes");
  };

  return (
    <MobileLayout title="Add Device" showBack>
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          <div className="relative">
            <Sprout className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Device Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="relative">
            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Device ID"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Location (Optional)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-secondary rounded-xl text-foreground placeholder:text-muted-foreground text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Sensor Type</label>
            <div className="relative">
              <select
                value={sensorType}
                onChange={(e) => setSensorType(e.target.value)}
                className="w-full px-4 py-3 bg-secondary rounded-xl text-foreground text-sm outline-none focus:ring-2 focus:ring-ring appearance-none cursor-pointer"
              >
                <option value="">Select sensor type</option>
                <option value="moisture">Soil Moisture</option>
                <option value="temperature">Temperature</option>
                <option value="humidity">Humidity</option>
                <option value="light">Light</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity mt-6"
        >
          Add Device
        </button>
      </form>
    </MobileLayout>
  );
};

export default AddDevice;
