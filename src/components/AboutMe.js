import { Container, Row, Col } from "react-bootstrap"

const AboutMe = () => {
    return(
        <Container>
        <Row>
          <Col>
            <div>
                <h3 className='text-start'>Biodata.</h3>
            </div>
            <ol style={{ listStyleType: 'circle' }}>
                <li className="text-start">Nama Lengkap : Virginia Majesty Elizabeth Bareweng</li>
                <li className="text-start">Agama : Kristen Protestan</li>
                <li className="text-start">Jenis Kelamin : Perempuan</li>
                <li className="text-start">Alamat : Kel. Bungalawang</li>
                <li className="text-start">Hoby : Menari</li>
                <li className="text-start">Golongan Darah : O</li>
                <li className="text-start">Tempat/Tanggal Lahir : Tahuna 11 September 2002</li>
            </ol> 
          </Col>
          <Col>
            <div>
                <h3 className='text-start'>Pendidikan.</h3>
            </div>
            <ol style={{ listStyleType: 'circle' }}>
                <li className="text-start">Nama Universitas atau Institusi : Universitas Klabat</li>                
                <li className="text-start">Fakultas : Ilmu Komputer & Jurusan Sistem Informasi</li>
                <li className="text-start">Tanggal mulai perkuliahan : Agustus 2020</li>
                <li className="text-start">Tanggung jawab dan tugas yang dilakukan:
                <p></p></li>
            </ol>  
            <div>
                <h3 className='text-start'>Riwayat Pendidikan.</h3>
            </div>
                <ol style={{ listStyleType: 'circle' }}>
                    <li className="text-start">TK : TK Katolik St. Agustinus Tahuna</li>
                    <li className="text-start">SD : SD Katolik St. Agustinus Tahuna</li>
                    <li className="text-start">SMP : SMP Negeri 1 Tahuna</li>
                    <li className="text-start">SMA : SMA Negeri 2 Tahuna</li>
                </ol>  
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </Col>
        </Row>
      </Container>
    )
}
export default AboutMe