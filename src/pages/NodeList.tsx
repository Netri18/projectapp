import { useNavigate } from "react-router-dom";
import { Sprout, ChevronRight, Trash2 } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { useDevices } from "@/contexts/DeviceContext";

const NodeList = () => {
  const navigate = useNavigate();
  const { devices, deleteDevice } = useDevices();

  return (
    <MobileLayout title="List of Nodes" showBack showMenu>
      <div className="space-y-3">
        {devices.map((node) => (
          <button
            key={node.id}
            onClick={() => navigate(`/nodes/${node.id}`)}
            className="w-full flex items-center justify-between p-4 bg-secondary rounded-2xl hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3">
              <Sprout className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{node.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-success bg-accent px-3 py-1 rounded-full">
                {node.status}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteDevice(node.id);
                }}
                className="p-1 text-muted-foreground hover:text-destructive transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <button
          onClick={() => navigate("/add-device")}
          className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Add Device
        </button>
      </div>
    </MobileLayout>
  );
};

export default NodeList;
