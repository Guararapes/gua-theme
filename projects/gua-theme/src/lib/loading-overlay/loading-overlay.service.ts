
import { Injectable } from "@angular/core";

@Injectable()
export class LoadingOverlayService {
    private loading = false;
    private quantidade = 0;

    startLoading(): void {
        setTimeout(() => {
            this.setLoading(true);
        }, 1);
    }

    endLoading(): void {
        setTimeout(() => {
            this.setLoading(false);
        }, 1);
    }

    private setLoading(load: boolean): void {
        if (load) {
            this.quantidade++;
            this.loading = true;
        } else {
            this.quantidade--;
            if (this.quantidade === 0) {
                this.loading = false;
            }
        }
    }

    getLoading(): boolean {
        return this.loading
    }
}