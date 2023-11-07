let users = [
    {id: 1, nama: "bantet", email: "bantet@gmail.com"},
    {id: 2, nama: "konclap", email: "konclap@gmail.com"},
]

module.exports = {
    index: (req, res) => {
        if(users.length > 0){
            res.json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
        }else{
            res.json({
                status: false,
                massage: "data masih kosong"
            })
        }
    },
    store:(req, res) => {
        users.push(req.body)
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            massage: "data berhasil di tambahakan"
        })
      },
      update:(req, res) => {
        const id = req.params.id
        users.filter(user => {
            if(user.id == id){
                user.nama = req.body.nama
                user.nama = req.body.email
                return user
            }
        })
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            massage: "data berhasil diubah"
        })
      },
      delete:(req, res) => {
        const id = req.params.id
        users = users.filter(user => user.id != id)
    
        res.json({
            status: true,
            data: users,
            method: req.method,
            url: req.url,
            massage: "data berhasil di hapus"
        })
      }
}
