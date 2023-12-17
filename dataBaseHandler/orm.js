const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const imageHandler = require("../utils/imagehandler");
class OrmHandler {
  constructor() {
    if (!OrmHandler.instance) {
      OrmHandler.instance = this;
    }
    return OrmHandler.instance;
  }

  async getUser(email, password) {
    const profile = await prisma.profile.findFirst({
      where: { email, password },
    });
    return user;
  }

  async registerUser(email, name, password) {
    console.error(email);

    if (!email) {
      return [false];
    }

    const userExist = await prisma.profile.findFirst({
      where: { email },
    });

    if (Boolean(userExist)) {
      return [false];
    }

    const user = await prisma.user.create({
      data: {
        password,
        profile: {
          create: {
            name,
            email,
            userName: "",
            media: {
              create: {
                bytes: [],
              },
            },
          },
        },
      },
      include: {
        profile: true,
      },
    });

    return [true, user.profile];
  }
}

module.exports = OrmHandler;
