import React, { useState, useEffect } from "react";
import { fetchData } from "../api/fetchApi";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from "../table/table.css";


const Tabular = () => {
    const [fetchedState, setFetchedState] = useState([])

    useEffect(() => {
        const fetchAPIState = async () => {
            const dailyData = await fetchData()
            setFetchedState(dailyData)
            //console.log(dailyData)
        }
        fetchAPIState()
    }, [])
    const arunachalTotal = parseInt(fetchedState.lohit)
    console.log("Arunachal " + arunachalTotal)
    const assamTotal = parseInt(fetchedState.bongaigaon) + parseInt(fetchedState.cachar) + parseInt(fetchedState.dhubri)
        + parseInt(fetchedState.goalpara) + parseInt(fetchedState.golaghat) + parseInt(fetchedState.hailakandi)
        + parseInt(fetchedState.kamrup) + parseInt(fetchedState.karimganj) + parseInt(fetchedState.kamrupmetro) + parseInt(fetchedState.lakhimpur)
        + parseInt(fetchedState.morigaon) + parseInt(fetchedState.nalbari)
        + parseInt(fetchedState.salmara) + parseInt(fetchedState.unknownassam)
    console.log("Bongaigaon " + fetchedState.bongaigaon)
    console.log("Cachar " + fetchedState.cachar)
    console.log("Dhubri " + fetchedState.dhubri)
    console.log("Goalpara " + fetchedState.goalpara)
    console.log("Goalaghat " + fetchedState.golaghat)
    console.log("Hailakandi " + fetchedState.hailakandi)
    console.log("Kamrup " + fetchedState.kamrup)
    console.log("Kamrup Metro " + fetchedState.kamrupmetro)
    console.log("Lakhimpur " + fetchedState.lakhimpur)
    console.log("Morigaon " + fetchedState.morigaon)
    console.log("Nalbari " + fetchedState.nalbari)
    console.log("Salmara " + fetchedState.salmara)
    console.log("Other State " + fetchedState.unknownassam)
    console.log("Assam " + assamTotal)
    const manipurTotal = parseInt(fetchedState.imphalwest) + parseInt(fetchedState.imphaleast)
    console.log("Manipur " + manipurTotal)
    const meghalayaTotal = parseInt(fetchedState.eastkhasi)
    console.log("Meghalaya " + meghalayaTotal)
    const mizoramTotal = parseInt(fetchedState.aizawl)
    console.log("Mizoram " + mizoramTotal)
    // const nagalandTotal = parseInt(fetchedState.dimapur)
    const tripuraTotal = parseInt(fetchedState.dhalai) + parseInt(fetchedState.gomati) + parseInt(fetchedState.northtripura)
    console.log("Tripura " + tripuraTotal)
    const total = arunachalTotal + assamTotal + manipurTotal + meghalayaTotal + mizoramTotal
        + tripuraTotal

    console.log(total)

    return (

        <>

            <div className="container">
                <div className="card" style={{}}>
                    <div className="card-header" style={{ background: 'rgba(255, 241, 194, 0.5)' }}>
                        Total Confirmed Cases in North East
                    </div>
                    <div className="card-body">
                        <h5 className="card-title text-center" style={{ color: 'rgba(0, 0, 0, 0.54)', fontFamily: "Arial", fontSize: '20px' }}>Total Confirmed Cases</h5>
                        {/* style={{ color: 'rgba(0, 0, 0, 0.5)' }} */}
                        <h5 className="card-text text-center">{total || "Loading..."}</h5>
                        <br></br>
                        {/* <h6 style={{ textAlign: 'center' }} > <button type="button" className="btn btn-light"><span style={{ color: 'rgb(0,0,0,0.4)' }}>Check Total India Cases</span><a href="https://covidindiastats.netlify.app/"> (Link)</a></button></h6> */}
                        <p className="text-center"><a href="https://covidindiastats.netlify.app/" className="btn btn-primary ">Read More</a></p>
                    </div>
                    <div className="card-header" style={{ background: 'rgba(255, 241, 194, 0.5)' }}>

                    </div>
                </div>
            </div>
            <br></br>
            <div className="container">
                {/* Tabular data displaying data from all states of NE-India */}

                {/* ASSAM */}
                <TableContainer component={Paper}>
                    <Table className={styles.container} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell className="alert alert-secondary">Arunachal Pradesh Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>
                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Lohit
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.lohit}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.lohitactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.lohitdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.lohitrecovered}</TableCell>
                            </TableRow>
                        </TableBody>


                        {/* ASSAM */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Assam Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            {/* Assam */}
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Bongaigaon
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.bongaigaon}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.bongaigaonactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.bongaigaondeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.bongaigaonrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Cachar
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.cachar}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.cacharactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.cachardeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.cacharrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Dhubri
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dhubri}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.dhubriactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.dhubrideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.dhubrirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Goalpara
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.goalpara}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.goalparaactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.goalparadeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.goalpararecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Golaghat
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.golaghat}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.golaghatactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.golaghatdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.golaghatrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Hailakandi
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.hailakandi}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.hailakandiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.hailakandideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.hailakandirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kamrup
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kamrup}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.kamrupactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.kamrupdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.kamruprecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Kamrup Metropolitan
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.kamrupmetro}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.kamrupmetroactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.kamrupmetrodeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.kamrupmetrorecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Karimganj
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.karimganj}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.karimganjactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.karimganjdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.karimganjrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Lakhimpur
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.lakhimpur}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.lakhimpuractive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.lakhimpurdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.lakhimpurrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Morigaon
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.morigaon}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.morigaonactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.morigaondeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.morigaonrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Nalbari
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.nalbari}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.nalbariactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.nalbarideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.nalbarirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    South Salmara Mankachar
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.salmara}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.salmaraactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.salmaradeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.salmararecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Other State
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.unknownassam}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.unknownassamactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.unknownassamdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.unknownassamrecovered}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* MANIPUR */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Manipur Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Imphal East
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.imphaleast}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.imphaleastactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.imphaleastdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.imphaleastrecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Imphal West
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.imphalwest}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.imphalwestactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.imphalwestdeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.imphalwestrecovered}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* MEGHALAYA */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Meghalaya Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    East Khasi Hills
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.eastkhasi}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.eastkhasiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.eastkhasideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.eastkhasirecovered}</TableCell>
                            </TableRow>
                            {/* <TableRow>
                                <TableCell component="th" scope="row">
                                    Unknown
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.unknown}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.unknownactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.unknowndeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.unknownrecovered}</TableCell>
                            </TableRow> */}
                        </TableBody>

                        {/* MIZORAM */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Mizoram Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Aizawl
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.aizawl}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.aizawlactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.aizawldeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.aizawlrecovered}</TableCell>
                            </TableRow>
                        </TableBody>

                        {/* NAGALAND */}
                        {/* <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Nagaland Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Infected</TableCell>
                            </TableRow>
                        </TableHead>
              
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    Dimapur
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dimapur}</TableCell>
                            </TableRow>
                        </TableBody> */}

                        {/* TRIPURA */}
                        <TableHead>
                            <TableRow>
                                <TableCell className="alert alert-secondary">Tripura Districts</TableCell>
                                <TableCell className="alert alert-warning" align="right">Confirmed</TableCell>
                                <TableCell className="alert alert-info" align="right">Active</TableCell>

                                <TableCell className="alert alert-danger" align="right">Deceased</TableCell>
                                <TableCell className="alert alert-success" align="right">Recovered</TableCell>
                            </TableRow>
                        </TableHead>
                        {/* Tabular data displaying data from all states of NE-India */}
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    Dhalai
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.dhalai}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.dhalaiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.dhalaideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.dhalairecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    Gomati
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.gomati}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.gomatiactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.gomatideceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.gomatirecovered}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ background: 'rgba(204, 207, 208, 0.1)' }} component="th" scope="row">
                                    North Tripura
                                </TableCell>
                                <TableCell style={{ background: 'rgba(255, 241, 194, 0.5)' }} align="right">{fetchedState.northtripura}</TableCell>
                                <TableCell style={{ background: 'rgba(199, 231, 237, 0.5)' }} align="right">{fetchedState.northtripuraactive}</TableCell>

                                <TableCell style={{ background: 'rgba(246, 204, 209, 0.5)' }} align="right">{fetchedState.northtripuradeceased}</TableCell>
                                <TableCell style={{ background: 'rgba(203, 234, 209, 0.5)' }} align="right">{fetchedState.northtripurarecovered}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )

}

export default Tabular


