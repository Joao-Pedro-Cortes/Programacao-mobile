import { Pressable, ScrollView, Text } from "react-native";

interface FiltroCategoriasProps {
  categorias: string[];
  selecionada: string;
  aoSelecionar: (categoria: string) => void;
}

export function FiltroCategorias({
  categorias,
  selecionada,
  aoSelecionar,
}: FiltroCategoriasProps) {
  return (
    <ScrollView
      horizontal
      className="grow-0"
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="flex-row items-start gap-2 py-1"
    >
      {categorias.map((categoria) => {
        const ativa = categoria === selecionada;

        return (
          <Pressable
            key={categoria}
            onPress={() => aoSelecionar(categoria)}
            accessibilityRole="button"
            accessibilityLabel={`Filtrar por ${categoria}`}
            className={`rounded-full px-4 py-2.5 active:opacity-60 ${
              ativa
                ? "bg-sky-500 dark:bg-destaque"
                : "bg-slate-200 dark:bg-superficie"
            }`}
          >
            <Text
              className={
                ativa
                  ? "text-[13px] font-bold text-white dark:text-fundo"
                  : "text-[13px] text-slate-700 dark:text-suave"
              }
            >
              {categoria}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
