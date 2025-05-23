const { createClient } = require("@sanity/client");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Potrzebny token do zapisu
  apiVersion: "2024-01-01",
});

async function migrateContent() {
  try {
    console.log("🚀 Rozpoczynam migrację treści do Sanity...");

    // Wczytaj dane z pliku JSON
    const migrationDataPath = path.join(__dirname, "migration-data.json");
    const migrationData = JSON.parse(
      fs.readFileSync(migrationDataPath, "utf8")
    );

    // Migruj każdą sekcję
    for (const [sectionName, sectionData] of Object.entries(migrationData)) {
      console.log(`📝 Migruję sekcję: ${sectionName}`);

      try {
        const result = await client.createOrReplace({
          _id: sectionName,
          ...sectionData,
        });
        console.log(`✅ Sekcja ${sectionName} została pomyślnie zmigrowana`);
      } catch (error) {
        console.error(`❌ Błąd podczas migracji sekcji ${sectionName}:`, error);
      }
    }

    console.log("🎉 Migracja zakończona pomyślnie!");
  } catch (error) {
    console.error("❌ Błąd podczas migracji:", error);
    process.exit(1);
  }
}

// Uruchom migrację
migrateContent();
