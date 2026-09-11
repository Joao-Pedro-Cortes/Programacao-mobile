import { useColorScheme } from "nativewind";
import { Pressable, Text, View } from "react-native";

interface CabecalhoProps {
  titulo: string;
  favoritos: number;
}

export function Cabecalho({ titulo, favoritos }: CabecalhoProps) {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="mb-4 flex-row items-center justify-between gap-2">
      <Text className="flex-1 text-[26px] font-bold text-sky-700 dark:text-destaque">
        {titulo}
      </Text>

      <View className="rounded-full bg-slate-200 px-3 py-1.5 dark:bg-superficie">
        <Text className="text-xs text-slate-900 dark:text-white">
          {favoritos} favoritos
        </Text>
      </View>

      <Pressable
        onPress={toggleColorScheme}
        accessibilityRole="button"
        accessibilityLabel="Alternar tema claro e escuro"
        className="min-h-[44px] min-w-[44px] items-center justify-center active:opacity-60"
      >
        <Text className="text-[20px]">
          {colorScheme === "dark" ? "☀️" : "🌙"}
        </Text>
      </Pressable>
    </View>
  );
}
