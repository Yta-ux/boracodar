export function Slogan({
  codeProduct,
  nameProduct,
  priceProduct,
}: {
  codeProduct: string;
  nameProduct: string;
  priceProduct: number;
}) {
  return (
    <div className="flex flex-col flex-1 gap-5">
      <div className="text-violet-950 flex flex-col gap-3">
        <p className="font-light text-[14px] uppercase ">
          CÓDIGO: {codeProduct}
        </p>
        <h1 className="font-serif text-6xl">{nameProduct}</h1>
        <p className="text-base">
          R$
          {priceProduct.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </div>
      <button className="transition ease-in-out rounded-full border border-violet-950 uppercase text-violet-950 text-sm py-2 px-4 hover:bg-violet-950 hover:text-white w-60">
        Adicionar à cesta
      </button>
    </div>
  );
}
