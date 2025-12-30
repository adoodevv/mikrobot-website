import { compare, hash } from 'bcryptjs';
import { prisma } from './prisma';

export async function hashPassword(password: string): Promise<string> {
  return hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return compare(password, hashedPassword);
}

export async function createAdmin(username: string, password: string) {
  const hashedPassword = await hashPassword(password);
  return prisma.admin.create({
    data: {
      username,
      password: hashedPassword
    }
  });
}

export async function verifyAdmin(username: string, password: string) {
  const admin = await prisma.admin.findUnique({
    where: { username }
  });
  
  if (!admin) {
    return null;
  }
  
  const isValid = await verifyPassword(password, admin.password);
  return isValid ? admin : null;
}

