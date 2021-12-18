import '../styles/WhatsNew.css';
import { Box } from '@mui/material';

function WhatsNew() {
    let data=[
        {
            news:"For First Year Students to login into ERP "
        },
        {
            news:"For First Year Students to login into ERP "
        },
        {
            news:"For First Year Students to login into ERP "
        },
        {
            news:"For First Year Students to login into ERP "
        },
        {
            news:"For First Year Students to login into ERP "
        },
        {
            news:"For First Year Students to login into ERP "
        },
        {
            news:"For First Year Students to login into ERP "
        },
    ]
    return (
        <>
            <Box className="box">
                <h1>Whats New</h1>
                <marquee className="marq" direction="up">
                    <div className="marq-box">
                        {
                            data.map( (item, i) => <div className="inner">{item.news}</div> )
                        }
                    </div>
                </marquee>
            </Box>
        </>
    )
}

export default WhatsNew;