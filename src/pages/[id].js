"use client"
import { Item } from "@/components/Item";
import { useRouter } from "next/router";

export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query;

  // Verifica si el id existe antes de renderizar el componente Item
  if (!id) {
    return <p>Loading...</p>; // O un mensaje de error
  }

  return <Item id={id} />;
}