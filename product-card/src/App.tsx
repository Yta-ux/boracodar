import { Slogan } from "./components/Slogan";
import { ViewImage } from "./components/ViewImage";

export function App() {
  return (
    <div className="flex gap-3.5 items-center justify-items-center flex-wrap">
      <ViewImage />
      <Slogan
        codeProduct="445509"
        nameProduct="Sofá Margot II - Rosé"
        priceProduct={4000}
      />
    </div>
  );
}
