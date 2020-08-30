interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}
interface IObserver {
    update(subject: ISubject): void;
}
export { IObserver };
export { ISubject };
