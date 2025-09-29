import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react"

import {
    IoChevronDownCircleOutline,
    IoChevronUpCircleOutline,
} from 'react-icons/io5'

const items = [
    {
        title: "¿Quiénes Somos?",
        content: "Somos una empresa multiservicios dedicada a ofrecer soluciones integrales a través de diferentes departamentos especializados.   Con un equipo de profesionales capacitados y una visión enfocada en la eficiencia, la innovación y la confianza, trabajamos para convertirnos en el aliado estratégico que ayude  a impulsar y fortalecer la infraestructura de nuestro país"
    },
    {
        title: "¿Cúal es nuestro objetivo?",
        content: "Nuestro objetivo es simplificar las necesidades de nuestros clientes brindando productos y servicios de alta calidad en áreas como comercialización, mantenimiento, asesoría técnica y gestión ambiental"
    },
    {
        title: "¿Dónde estamos ubicados?",
        content: "Caracas, Venezuela."
    },
    
]

export default function Acordion() {

    return (
        <div className="w-full">
            {items.map((item, index) => (
                <Disclosure key={index}>
                    {({ open }) => (
                        <>
                            <DisclosureButton className={`w-full text-left bg-white rounded-sm p-4 flex items-center justify-between ${open ? 'border-l-2 border-blue1' : 'border mb-4'}`}>
                                <span className="font-bold text-gray-600 text-lg">{item.title}</span>
                                {open ? <IoChevronUpCircleOutline className="w-5 h-5 text-blue1" /> : <IoChevronDownCircleOutline className="w-5 h-5 text-gray-500" />}
                            </DisclosureButton>
                            <DisclosurePanel className='bg-white p-4 border-l-2 border-blue2 rounded-sm mb-2'>
                                <p className="text-gray-500">{item.content}</p>
                            </DisclosurePanel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    )
}