import numpy as np

coords_1970 = open('1970.txt', 'r')
wgs = open('wgs.txt', 'r')

coords_1970_matrix = []

for point in coords_1970:
    current_point = point.split()[1:]
    coords_1970_matrix.append(current_point)
    
arr1 = np.array(coords_1970_matrix, dtype='float64')


np.set_printoptions(suppress=True, precision=2)

print(arr1)
coords_1970.close()
wgs.close()


def test(numbers):
    """_summary_

    Args:
        numbers (_type_): _description_

    Returns:
        _type_: _description_
    """
    import statistics
    mean = statistics.mean(numbers)
    median = statistics.median(numbers)
    stdev= statistics.stdev(numbers)
    
    return {"mean": mean, "median": median, "stdev": stdev}



   
