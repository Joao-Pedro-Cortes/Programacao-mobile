import { Image, Pressable, Text, View } from "react-native";

import { Produto } from "@/types/produto";

interface CardProdutoProps {
  produto: Produto;
  favorito: boolean;
  aoAlternarFavorito: (id: number) => void;
}

export function CardProduto({
  produto,
  favorito,
  aoAlternarFavorito,
}: CardProdutoProps) {
  return (
    <View className="mb-3 flex-row items-center gap-3 rounded-card bg-slate-100 p-3 dark:bg-superficie">
      <Image
        source={{ uri: produto.thumbnail }}
        className="h-16 w-16 rounded-lg bg-slate-200 dark:bg-fundo"
      />

      <View className="flex-1">
        <Text
          className="text-[15px] font-semibold text-slate-900 dark:text-white"
          numberOfLines={2}
        >
          {produto.title}
        </Text>

        <Text className="mt-0.5 text-xs text-slate-500 dark:text-suave">
          {produto.brand ?? "Sem marca"}
        </Text>

        <Text className="mt-1.5 text-[17px] text-sky-700 dark:text-destaque">
          R$ {produto.price.toFixed(2)}
        </Text>
      </View>

      <Pressable
        onPress={() => aoAlternarFavorito(produto.id)}
        accessibilityRole="button"
        accessibilityLabel={
          favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"
        }
        className="min-h-[44px] min-w-[44px] items-center justify-center active:opacity-60"
      >
        <Text className="text-2xl text-sky-600 dark:text-destaque">
          {favorito ? "★" : "■"}
        </Text>
      </Pressable>
    </View>
  );
}
