import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function seed() {
  // すべてのユーザーデータを削除
  await prisma.user.deleteMany();

  const users = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" },
    { name: "Eve" },
    { name: "Frank" },
    { name: "Grace" },
    { name: "Hank" },
    { name: "Ivy" },
    { name: "Jack" },
    { name: "Kathy" },
    { name: "Leo" },
    { name: "Mona" },
    { name: "Nina" },
    { name: "Oscar" },
    { name: "Paul" },
    { name: "Quincy" },
    { name: "Rachel" },
    { name: "Steve" },
    { name: "Tina" },
  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}

console.log("⭐️ seed start");

seed()
  .then(() => {
    console.log("🚀 Seeded data successfully");
  })
  .catch((e) => {
    console.error("⚠️ seed failed", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
