import { useParams } from "react-router-dom";
import { Droplets, Thermometer, MapPin, CheckCircle, ChevronRight, MoreVertical } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";

const nodeData: Record<string, { name: string; moisture: string; temperature: string; location: string; condition: string }> = {
  "1": { name: "Node 1", moisture: "65%", temperature: "27°C", location: "Field", condition: "Normal" },
  "2": { name: "Node 2", moisture: "72%", temperature: "25°C", location: "Garden", condition: "Normal" },
};

const NodeDetail = () => {
  const { id } = useParams();
  const node = nodeData[id || "1"] || nodeData["1"];

  const metrics = [
    { icon: Droplets, label: "Soil Moisture", value: node.moisture, color: "text-primary" },
    { icon: Thermometer, label: "Temperature", value: node.temperature, color: "text-primary" },
    { icon: MapPin, label: "Location", value: node.location, color: "text-primary" },
  ];

  return (
    <MobileLayout showBack>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">{node.name}</h1>
        <button className="text-foreground p-1">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {metrics.map((metric, i) => (
          <button
            key={i}
            className="w-full flex items-center justify-between p-4 bg-secondary rounded-2xl hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3">
              <metric.icon className={`w-5 h-5 ${metric.color}`} />
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">{metric.label}</p>
                <p className="text-sm text-muted-foreground">{metric.value}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}

        <div className="p-4 bg-secondary rounded-2xl">
          <p className="text-sm font-semibold text-foreground mb-3">Condition</p>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-sm font-medium text-foreground">{node.condition}</span>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default NodeDetail;
