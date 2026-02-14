import { ArrowLeft, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MobileLayoutProps {
  children: React.ReactNode;
  title?: string;
  showBack?: boolean;
  showMenu?: boolean;
}

const MobileLayout = ({ children, title, showBack = false, showMenu = false }: MobileLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-card rounded-3xl shadow-xl p-6 min-h-[600px] flex flex-col">
        {(showBack || showMenu || title) && (
          <div className="flex items-center justify-between mb-6">
            {showBack ? (
              <button onClick={() => navigate(-1)} className="text-foreground p-1">
                <ArrowLeft className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-7" />
            )}
            {title && <h1 className="text-xl font-bold text-foreground flex-1 text-center">{title}</h1>}
            {showMenu ? (
              <button className="text-foreground p-1">
                <Menu className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-7" />
            )}
          </div>
        )}
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default MobileLayout;
