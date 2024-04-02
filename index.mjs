import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// console.log(global);

const getData = async (email) => {
    const data = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    console.log(data);
}
// getData("obaidmuneer55@gmail.com");

const createData = async (email, name) => {
    const data = await prisma.user.create({
        data: {
            email: email,
            name: name,
        }
    })
    console.log(data);
}
// createData("obaidmuneer55@gmail.com", "Obaid Muneer");

const updateData = async (email, updated_data) => {
    const data = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            name: updated_data.name
        }
    })
    console.log(data);
}
// updateData("obaidmuneer55@gmail.com", { name: "ubaid muneer" });

const deleteData = async (email) => {
    const data = await prisma.user.delete({
        where: {
            email: email
        }
    })
    console.log(data);
}
// deleteData("obaidmuneer55@gmail.com");
