import { FC, ReactElement } from 'react'
import './styles/SelectionZonesContainer.scss'
import { zoneTypes } from '../types/zoneType'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import SourceZone from './SourceZone';
import DestinationZone from './DestinationZone';

const SelectionZonesContainer: FC = (): ReactElement => {
    return (
        <div className='selectionZonesContainer' >
            <DndProvider backend={HTML5Backend}>
                <SourceZone />
                <div className='destinationsContainer'>
                    <DestinationZone zoneType={zoneTypes.REJECTED_ZONE} />
                    <DestinationZone zoneType={zoneTypes.ACCEPTED_ZONE} />
                </div>
            </DndProvider>
        </div>
    )
}

export default SelectionZonesContainer
