import Image from '@/components/Image'

export default function Growth({ growthStage }) {
  if (growthStage === 'seedling') {
    return (
      <div className="flex gap-2">
        <Image src="/static/images/plant.png" alt="seedling" width={25} height={25} />
        <div className="text-primary-600 dark:text-primary-400">Seedling</div>
      </div>
    )
  } else if (growthStage === 'budding') {
    return (
      <div className="flex gap-2">
        <Image src="/static/images/leaf.png" alt="budding" width={25} height={25} />
        <div className="text-primary-600 dark:text-primary-400">Budding</div>
      </div>
    )
  } else if (growthStage === 'evergreen') {
    return (
      <div className="flex gap-2">
        <Image src="/static/images/flower.png" alt="evergreen" width={25} height={25} />
        <div className="text-primary-600 dark:text-primary-400">Evergreen</div>
      </div>
    )
  } else {
    return null
  }
}
