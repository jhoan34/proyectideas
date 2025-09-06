"use client";
import Container from "@/components/container";
import { IdeasProvider } from "@/context/ideas-context";
import GeneratorForm from "./_components/generator-form";
import CardList from "./_components/card-list";

export default function Ideas() {
  return (
    <IdeasProvider>
      <Container className="flex-1 flex flex-col lg:flex-row py-4 gap-4 px-4 sm::px-0">
        <GeneratorForm />
        <CardList />
      </Container>
    </IdeasProvider>
  );
}
