
/**
 * DraggableModel encapsulates the information about positioning to decouple it from final implementations.
 */
export interface DraggableModel {
    id: string;
    x: number;
    y: number;
    height: number;
    width: number;
    color: string;
}