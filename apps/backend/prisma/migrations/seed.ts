import { produtos } from '@game4r/core';
import { PrismaPg } from '@prisma/adapter-pg';

async function main() {
  const mod =
    (await import('../../src/generated/prisma/client.js')) as unknown as {
      PrismaClient: new (options: { adapter: PrismaPg }) => {
        produto: {
          createMany: (args: { data: unknown[] }) => Promise<{ count: number }>;
        };
        $disconnect: () => Promise<void>;
      };
    };

  const prisma = new mod.PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL! }),
  });

  await prisma.produto.createMany({
    data: produtos.map(({ id, ...rest }) => rest),
  });

  await prisma.$disconnect();
}

main().catch(console.error);
