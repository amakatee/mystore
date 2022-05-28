import nodemailer from 'nodemailer'


export default async (req, res) => {
    const {name, email, products, city, address, familyname, phone, zip} = req.body

 
    const transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: 'katziwebb@gmail.com',
            pass: 'http://localhost:3000/'
        }

    })
 
    try {
        const Email = await transporter.sendMail({
            from: email,
            to:'katezi@bk.ru',
            subject:`Новое сообщение от ${name}`,
            html: ` <p><strong>Имя: </strong>${name}</p><br />
            <p><strong>Фамилия: </strong>${familyname}</p><br />
            <p><strong>Город: </strong>${city}</p><br />
            <p><strong>Адрес: </strong>${address}</p><br />
            <p><strong>Индекс: </strong>${zip}</p><br />
            <p><strong>Телефон: </strong>${phone}</p><br />
            <p><strong>Продукты: </strong>${products}</p><br />
            
           
         
            <p><strong>Email отправителя: </strong>${email}</p><br />
            
            `
        })
        console.group("Message sent", Email.messageId)
    } catch(err){
        console.log(err)
    }
    res.status(200).json(req.body)
    
}




