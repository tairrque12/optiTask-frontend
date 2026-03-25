import ServiceCard from "./ServiceCard";

function ServicesPreviewSection() {
    return (
        <section>
            <h2>Featured Services</h2>
            <p>Choose from structured robot-powered service categories.</p>

            <ServiceCard
                title="Home & Household Services"
                description="Let our HomeHelper robot take care of daily chores like laundry folding, grocery unpacking, tidying, and closet organization so you don’t have to."
            />

            <ServiceCard
                title="ElderCare"
                description="Helping seniors stay independent by assisting with tasks they can no longer do themselves — mobility support, medication reminders, daily care, and safety monitoring."
            />

            <ServiceCard
                title="Manufacturing & Assembly"
                description="Power your production line with the AssemblyPro robot for material handling, machine tending, precision assembly, quality checks, and repetitive factory tasks."
            />

            <ServiceCard
                title="Logistics & Warehousing"
                description="Keep your warehouse running efficiently with the WarehouseMover robot — perfect for tote movement, order picking, palletizing, inventory restocking, and returns processing."
            />
        </section>
    );
}

export default ServicesPreviewSection;