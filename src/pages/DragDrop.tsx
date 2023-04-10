import { FC, ReactElement, useEffect, useState } from "react";
import SelectionZonesContainer from "../components/SelectionZonesContainer";
import './styles/DragDrop.scss'
import getCandidates from "../services/getCandidates";
import { useDispatch } from "react-redux";
import Loading from "../components/Loading";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ExpandedCandidate from "../components/ExpandedCandidate";
import Navbar from "../components/Navbar";


const DragDrop: FC = (): ReactElement => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();
    const expandedCandidate = useSelector((state: RootState) => state.expandedCandidate.candidate)


    useEffect(() => {
        const initializePageData = async () => {
            try {
                await getCandidates(dispatch)
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }
        initializePageData()
    }, [])

    return (
        <>
            {isLoading && <Loading />}
            {expandedCandidate && <ExpandedCandidate />}
            {/* <ExpandedCandidate /> */}
            <Navbar />
            <div className="dragDrop" >
                <h2 className="topDescription" >Please select the convenient candidates for the Front-end Developer job offer, drag the users you want from the blue zone and then drop them either in the red zone to reject the or in the green one to accept them, please choose your candidates carefully</h2>
                <SelectionZonesContainer />
                <div className="buttonsContainer" >
                    <Button isPrimary={false} title="Revert changes" />
                    <Button isPrimary={true} title="Apply changes" />
                </div>
                {/* <FinalList /> */}
            </div>
        </>
    )
}

export default DragDrop;
