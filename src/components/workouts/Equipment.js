export default function Equipment({equipment}) {

    return(
        <div className="flex flex-col gap-8">
            <h3 className="text-lg lg:text-4xl font-bold">Equipment</h3>
            <div>
                {equipment.map((equip) => (
                    <p className="lg:text-2xl" key={equip.equipment_id.name}>{equip.equipment_id.name}</p>
                ))}
            </div>
        </div>
    )
}