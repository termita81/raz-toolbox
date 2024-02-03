import { Capacitor } from "@capacitor/core"
import { LocalNotifications, Schedule } from "@capacitor/local-notifications"
import dayjs from "dayjs"

async function whatever() {
    let id = 1000

    const channelId = 'channel-id-12345'
    const channelCreatePromise = () => LocalNotifications.createChannel({
        id: channelId,
        name: 'Raz-Toolbox channel',
        visibility: 1
    })

    if (Capacitor.getPlatform() === 'web') return
    await channelCreatePromise()
    const schedule: Schedule = {
        at: dayjs().add(10, 'second').toDate(),
        allowWhileIdle: true,
    }
    LocalNotifications.schedule({
        notifications: [
            {
                title: `Notificare ${id++}`,
                body: 'some body',
                id,
                schedule,
                iconColor: 'red',
                channelId
            }
        ]
    })
}